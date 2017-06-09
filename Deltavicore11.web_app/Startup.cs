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
            var c = Configuration["Data:DefaultConnection:ConnectionString"];

            services.Configure<OptionsAppSettings>(options => Configuration.GetSection("AppSettings"));
            //services.Configure<OptionsDB>(options => Configuration.GetSection("ConnectionStrings"));
            // *If* you need access to generic IConfiguration this is **required**
            services.AddSingleton<IConfiguration>(Configuration);
            // Add framework services.

            //https://stackoverflow.com/questions/39864550/how-to-get-base-url-without-accessing-a-request
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
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
        }
    }
}
