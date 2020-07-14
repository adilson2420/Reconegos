using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace GC.DAL
{
    public class LoginDAL
    {
        readonly MySqlConnection cn = new MySqlConnection();

        public void Abrir()
        {
            cn.ConnectionString = ConexaoDAL.Conexao;
            cn.Open();
        }
        public void Fechar()
        {
            cn.Close();
        }

    }
}
