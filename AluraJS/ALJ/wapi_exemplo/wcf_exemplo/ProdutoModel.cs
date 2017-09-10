using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace wcf_exemplo
{
    public class ProdutoModel
    {
        [DataMember]
        public int ProdutoID { get; set; }
        [DataMember]
        public string ProdutoNome { get; set; }
        [DataMember]
        public string ProdutoQuantidade { get; set; }
        [DataMember]
        public decimal ProdutoPreco { get; set; }
        [DataMember]
        public bool ProdutoAtivo { get; set; }
    }
}