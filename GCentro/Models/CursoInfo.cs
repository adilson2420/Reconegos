using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GCentro.Models
{
    public class CursoInfo
    {
        private int _idCururso;
        private string _nomeCurso;
        private string _descricao;
        private bool _estado;

        public int IdCururso { get => _idCururso; set => _idCururso = value; }
        public string NomeCurso { get => _nomeCurso; set => _nomeCurso = value; }
        public bool Estado { get => _estado; set => _estado = value; }
        public string Descricao { get => _descricao; set => _descricao = value; }
    }
}
