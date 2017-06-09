using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Html;
using Newtonsoft.Json;
using Deltavicore11.web_app.Models;



namespace Deltavicore11.web_app.Helpers
{
    /// <summary>
    /// Adapted from https://github.com/madskristensen/BundlerMinifier/wiki/Unbundling-scripts-for-debugging
    ///         //https://gist.github.com/mohamedmansour/cd50123f8575daba7a7f12847b12da5d
    /// Areas modified:
    ///  - Modified it to make it work with aspnetcore.
    ///  - Accept both scripts and styles.
    ///  - Read config from wwwroot
    ///  - Accept baseFolder since DI not suited for static methods
    ///  - Style nitpicks
    /// </summary>
    public class Bundling
    {
        public static List<CustomBundle> GetAppBundles(string baseFolder)
        {

            var configFile = Path.Combine(baseFolder, "bundleconfig.json");
            List<CustomBundle> AppBundles = new List<CustomBundle>();
            string Bundlefilter = "AppBundle.js";

            var file = new FileInfo(configFile);
            if ( file.Exists) 
	        {

                var AllBundles = JsonConvert.DeserializeObject<IEnumerable<Bundle>>(File.ReadAllText(configFile));
                var bundles =  (from b in AllBundles
                                where b.OutputFileName.EndsWith(Bundlefilter, StringComparison.CurrentCultureIgnoreCase)
                        select b).ToList();

                foreach (var item in bundles)
                {
                    AppBundles.Add(new CustomBundle
                    {
                        BundleName = item.OutputFileName.Replace(Bundlefilter, string.Empty).Replace(@"wwwroot/js/", string.Empty),
                        IsLoaded = false,
                        Path = item.OutputFileName.Replace("wwwroot", string.Empty)

                    });
                }

            }

            return AppBundles;
        }

        private static Bundle GetBundle(string configFile, string bundlePath)
        {
            var file = new FileInfo(configFile);
            if (!file.Exists)
                return null;

            var bundles = JsonConvert.DeserializeObject<IEnumerable<Bundle>>(File.ReadAllText(configFile));
            return (from b in bundles
                    where b.OutputFileName.EndsWith(bundlePath, StringComparison.CurrentCultureIgnoreCase)
                    select b).FirstOrDefault();
        }

        class Bundle
        {
            [JsonProperty("outputFileName")]
            public string OutputFileName { get; set; }

            [JsonProperty("inputFiles")]
            public List<string> InputFiles { get; set; } = new List<string>();
        }

    }
}
