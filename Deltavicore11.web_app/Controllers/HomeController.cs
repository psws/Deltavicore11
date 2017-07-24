using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Deltavicore11.web_app.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        //NOTE ETTOR() IS NEVER REACHED CUZ WE ARE USING ANGULAR ROUTING IN CLIENT
        //public IActionResult Error()
        //{
        //    return View();
        //}
        //NOTE ETTOR() IS NEVER REACHED CUZ WE ARE USING ANGULAR ROUTING IN CLIENT
        [RouteAttribute("/Error/{code?}")]
        public IActionResult Error(int? code = null)
        {
            //https://forums.asp.net/t/2114176.aspx?app+UseDeveloperExceptionPage+not+working
            if (code.HasValue && code.Value == 400)
            {
                return View("404");
            }
            else
                return View();
        }
    }
}
