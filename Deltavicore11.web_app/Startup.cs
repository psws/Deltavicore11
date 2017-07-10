using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Serialization;
using Expenses.core;
using Expenses.core.DataLayer;
using Expenses.core.DataLayer.Mapping;

namespace Deltavicore11.web_app
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                 .AddJsonFile("app_config.json", optional: false, reloadOnChange: true)
               .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration
            //https://weblog.west-wind.com/posts/2016/May/23/Strongly-Typed-Configuration-Settings-in-ASPNET-Core
            //https://www.codefluff.com/getting-configuration-settings-asp-net-core-mvc/
            // Adds services required for using options.
            services.AddOptions();

            // Register the ConfigurationBuilder instance which MyOptions binds against.
            var x = Configuration.GetSection("AppSettings:ApplicationName");
            var connection = Configuration["Data:Sql:ConnectionString"];

            //inject OptionsAppSettings objects for _Layout.cshtml vession and baseUrl
            //the options => requires an OptionsAppSettings() constructor to set the value.
            //The GetSection() call is overidden
            services.Configure<OptionsAppSettings>(options => Configuration.GetSection("OptionsAppSettings"));

            //next line inits an AppSettings object with the 'connectionstring' from app_config.json
            //this is method to inject parms into the ExpenseDbContext in Expenses.core for the app
            //When testing the core, you can provide your own appsettings values
            //AppSettings object does not have a constructor. The values must come from json config file
            //options => is not used cuz there is no AppSettings constructor.
            services.Configure<AppSettings>(Configuration.GetSection("Data:Sql"));

            //services.Configure<OptionsDB>(options => Configuration.GetSection("ConnectionStrings"));
            // *If* you need access to generic IConfiguration this is **required**
            services.AddSingleton<IConfiguration>(Configuration);

            // Add framework services.

            //https://stackoverflow.com/questions/39864550/how-to-get-base-url-without-accessing-a-request
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();



            services
                .AddMvc()
                .AddJsonOptions(a => a.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());

        
            services.AddEntityFrameworkSqlServer().AddDbContext<ExpenseDbContext>();

            services.AddScoped<IEntityMapper, ExpenseEntityMapper>();

            services.AddScoped<ILogger<ExpenseDbContext>, Logger<ExpenseDbContext>>();

            // Add application services.
            //https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection
            //services.AddTransient<IEmailSender, AuthMessageSender>();
            //services.AddTransient<ISmsSender, AuthMessageSender>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, ExpenseDbContext ExpenseDbContext)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //https://docs.microsoft.com/en-us/aspnet/core/fundamentals/static-files
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                //https://www.hanselman.com/blog/AddingACustomInlineRouteConstraintInASPNETCore10.aspx
                routes.MapRoute("products", "products/{*.}",
                    new { controller = "Home", action = "Index" });

                //catchall for about, home, contact
                routes.MapRoute("home", "home/{*.}",
                    new { controller = "Home", action = "Index" });

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            //var context = app.ApplicationServices.GetService<ExpenseDbContext>();
            ILogger ILogger = app.ApplicationServices.GetService<ILoggerFactory>().CreateLogger("Init");

            DbInitializer.Initialize(ExpenseDbContext, ILogger);
        }
    }
}
