using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GC.Controllers
{
    public class LoginController : Controller
    {
        //MySqlConnection cn = new MySqlConnection();

        public ViewResult TelaLogin()
        {
            return View();
        }
        //[HttpPost]
        //public ViewResult TelaLogin(Info_Login login)
        //{

        //        return View("../PaginaInicial/Index");
        //}

    } 
}