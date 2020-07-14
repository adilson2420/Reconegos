using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace GC.DAL
{
    public class ConexaoDAL
    {
        public static String Conexao
        {
            get
            {
                return "server = (localhost); database = revisao; Uid = root;Pwd =;";
            }
        }

    }
}
