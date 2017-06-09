using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;


namespace Deltavicore11.web_app
{
    public class OptionsAppSettings
    {
        public string ApplicationVersion { get; set; }
        public string ApplicationUrl { get; set; }
        

        public OptionsAppSettings()
        {
            ApplicationUrl = "http://localhost:52371/"; // not used
            //http://stackoverflow.com/questions/37798075/display-project-version-in-asp-net-mvc-core-application-rc2
            ApplicationVersion = Microsoft.Extensions.PlatformAbstractions.PlatformServices.Default.Application.ApplicationVersion;
        }
    }

    public class OptionsDB
    {
        public string _DefaultConnection { get; set; }

        public OptionsDB()
        {
            _DefaultConnection = "Server=(localdb)\\MSSQLLocalDB;Database=_CHANGE_ME;Trusted_Connection=True;MultipleActiveResultSets=true";
        }
    }

}
