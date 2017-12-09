using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Serialization;
using Expenses.core;
using Expenses.core.DataLayer;
using Expenses.data.entityframework.Mapping;
using Expenses.data.entityframework;
using Expenses.business;
using Expenses.common.interfaces.Repository;
using Expenses.entityframework.repository;
using Expenses.common.interfaces.Service;
using Expenses.common.interfaces.Identity;
using Deltavicore11.webapi.ExceptionSupport;
using Expenses.identity;

using Serilog;

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

            //https://stackoverflow.com/questions/35038242/asp-net-5-core-rc1-how-to-log-to-file-rolling-file-logging-dnx-core-5-comp
            string File = "logs/log-{Date}.txt";
            if (env.IsDevelopment())
            {
                Log.Logger = new LoggerConfiguration()
                        .MinimumLevel.Debug()
                        .WriteTo.RollingFile(Path.Combine(env.WebRootPath, File))
                        .CreateLogger();
            }
            else
            {
                Log.Logger = new LoggerConfiguration()
                        .MinimumLevel.Information()
                        .WriteTo.RollingFile(Path.Combine(env.WebRootPath, File))
                        .CreateLogger();
            }

#if SQLLITE_DEBUG
            //https://github.com/aspnet/Microsoft.Data.Sqlite/issues/275
            var Root_Directory = env.ContentRootPath;
            if (!Directory.Exists($"{ Root_Directory}\\SQLiteDB")  )
            {
                Directory.CreateDirectory($"{ Root_Directory}\\SQLiteDB");
            }

            Environment.SetEnvironmentVariable("ADONET_DATA_DIR", $"{ Root_Directory}\\SQLiteDB");
#endif

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

#if SQLLITE_DEBUG
            var connection = Configuration["Data:Sqlite:ConnectionString"];
#elif SQLPSS66_DEBUG
            var connection = Configuration["Data:Sqlpss66:ConnectionString"];
#elif SQL
            var connection = Configuration["Data:Sql:ConnectionString"];
#elif RELEASE
            var connection = Configuration["Data:SqlReleasepss66:ConnectionString"];
#endif



            //inject OptionsAppSettings objects for _Layout.cshtml vession and baseUrl
            //the options => requires an OptionsAppSettings() constructor to set the value.
            //The GetSection() call is overidden
            services.Configure<OptionsAppSettings>(options => Configuration.GetSection("OptionsAppSettings"));

            //next line inits an AppSettings object with the 'connectionstring' from app_config.json
            //this is method to inject parms into the ExpenseDbContext in Expenses.core for the app
            //When testing the core, you can provide your own appsettings values
            //AppSettings object does not have a constructor. The values must come from json config file
            //options => is not used cuz there is no AppSettings constructor.
#if SQLLITE_DEBUG
            services.Configure<AppSettings>(Configuration.GetSection("Data:Sqlite"));
#elif SQLPSS66_DEBUG
            services.Configure<AppSettings>(Configuration.GetSection("Data:Sqlpss66"));
#elif SQL
            services.Configure<AppSettings>(Configuration.GetSection("Data:Sql"));
#elif RELEASE
            services.Configure<AppSettings>(Configuration.GetSection("Data:SqlReleasepss66"));
#endif

            //services.Configure<OptionsDB>(options => Configuration.GetSection("ConnectionStrings"));
            // *If* you need access to generic IConfiguration this is **required**
            services.AddSingleton<IConfiguration>(Configuration);

            // Add framework services.

            //https://stackoverflow.com/questions/39864550/how-to-get-base-url-without-accessing-a-request
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();



            services
                .AddMvc()
                .AddJsonOptions(a => a.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());


#if SQLLITE_DEBUG
            services.AddEntityFrameworkSqlite().AddDbContext<ExpenseDbContext>();
#else
            services.AddEntityFrameworkSqlServer().AddDbContext<ExpenseDbContext>();
#endif


            services.AddScoped<ILogger<ExpenseDbContext>, Logger<ExpenseDbContext>>();
            services.AddScoped<NotImplementedExceptionFilter>();

            services.AddScoped<IEntityMapper, ExpenseEntityMapper>();
            services.AddScoped<IUserInfo, UserInfo>();

         //Dependency injection
            services.AddScoped<IPoultryFeedService, PoultryFeedService>();
            services.AddScoped<IPoultryFeedRepository, PoultryFeedRepository>();
            services.AddScoped<ILogger<PoultryFeedService>, Logger<PoultryFeedService>>();

            services.AddScoped<IFarmService, FarmService>();
            services.AddScoped<IFarmRepository,FarmRepository>();
            services.AddScoped<ILogger<FarmService>, Logger<FarmService>>();

            //https://stackoverflow.com/questions/40156377/disable-application-insights-sampling-with-the-asp-net-core-libraries
            //enable sampling
            //see program.cs to enable 
            //   //.UseApplicationInsights()
            // _layout.cshtml uncomment to enable
            //          @*@inject Microsoft.ApplicationInsights.AspNetCore.JavaScriptSnippet JavaScriptSnippet*@
            //  @*@Html.Raw(JavaScriptSnippet.FullScript)*@
            var aiOptions = new Microsoft.ApplicationInsights.AspNetCore.Extensions.ApplicationInsightsServiceOptions();
            aiOptions.EnableAdaptiveSampling = false;
            //services.AddApplicationInsightsTelemetry( aiOptions);


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
            //serilog
            loggerFactory.AddSerilog();


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage(); //nO default exception page if app.UseMiddleware(typeof(ErrorHandlingMiddleware)) is enabled. 
                //app.UseBrowserLink();
                //app.UseExceptionHandler("/Home/Error");
                //app.UseStatusCodePagesWithRedirects("/Home/Error/{0}");
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseStatusCodePagesWithRedirects("/Home/Error/{0}");
            }

            //https://stackoverflow.com/questions/38630076/asp-net-core-web-api-exception-handling
            app.UseMiddleware(typeof(ErrorHandlingMiddleware)); // see app.UseDeveloperExceptionPage()

            // Add this line above app.Mvc in Startup.cs to Handle 404s etc
            //https://forums.asp.net/t/2114176.aspx?app+UseDeveloperExceptionPage+not+working
            app.UseStatusCodePagesWithReExecute("/Home/Error/{0}");

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
            Microsoft.Extensions.Logging.ILogger ILogger = app.ApplicationServices.GetService<ILoggerFactory>().CreateLogger("Init");
            DbInitializer.Initialize(ExpenseDbContext, ILogger);
        }
    }
}
