using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GCentro.Models;

namespace GCentro.Controllers
{
    public class PaginaInicialController : Controller
    {

        public ViewResult Index()
        {
            return View();
        }
    }
}