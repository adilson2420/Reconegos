using System;

namespace GC.Models
{
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
}
