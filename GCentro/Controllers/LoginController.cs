using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GCentro.Models;

namespace GCentro.Controllers
{
    public class LoginController : Controller
    {
       

        public ViewResult TelaLogin()
        {
            return View();
        }
        [HttpPost]
        public ViewResult TelaLogin(Info_Login login)
        {
                return View("../PaginaInicial/Index");
        }
    }
}