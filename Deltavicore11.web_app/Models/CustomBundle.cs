﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Deltavicore11.web_app.Models
{
    public class BundleInformation
    {
        public List<CustomBundle> Bundles { get; set; }
    }

    public class CustomBundle
    {
        public string BundleName { get; set; }
        public string Path { get; set; }
        public Boolean IsLoaded { get; set; }
    }
}
