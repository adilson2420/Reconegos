using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GC.DAL;

namespace GC.BLL
{
    
    public class LoginBLL
    {
        readonly LoginDAL lo = new LoginDAL();   
        public void Entrar()
        {
            try { lo.Abrir(); 
            }
            catch (Exception ex) {
                throw new Exception("erro: " + ex.Message);
            }
            
        }
    }
}
