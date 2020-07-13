using System;
using MySql.Data.MySqlClient;

namespace GCentro.Models
{
    public class Conexao
    {
        // Conexao com base de dados
        public static MySqlConnection conexao = new MySqlConnection("server = (localhost); User Id = root;database = adilson; password = SENHA");

        //Abrir e fechar a conexao
        public static void AbrirConexao()
        {
            try
            {
                conexao.Open();
            }
            catch 
            {
                throw new Exception ("Erro Da conexao");
            }
            
        }
        public static void FecharConexao()
        {
            conexao.Close();
        }
    }

    public class Info_Apresentar
    {
        public int Apre { get; set; }
        public string Visualizar { get; set; }
    }
    public class Info_Especialidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public String Estado { get; set; }
        public bool Activo { get; set; }

        public int Ver { get; set; }

    }
    public class Info_Login
    {
        private String _emal;
        private String _senha;
        private bool _activo;
        private String _categoria;

        public string Senha { get => _senha; set => _senha = value; }
        public string Nome { get => _emal; set => _emal = value; }
        public string Categoria { get => _categoria; set => _categoria = value; }
        public bool Activo { get => _activo; set => _activo = value; }
    }
    public class Info_Todos
    {
        public Info_Apresentar Apresentar { get; set; }
    
        public Info_Especialidade Especialidade { get; set; }
    }
}
