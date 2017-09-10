using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace wcf_exemplo
{
    public class Produto
    {
        public ProdutoModel GetProduto(int id)
        {
            //TODO Chamar a camada de negocios para retornar o produto
            ProdutoModel prod = new ProdutoModel();
            prod.ProdutoID = id;
            prod.ProdutoNome = "Teste";
            prod.ProdutoPreco = 10.0m;
            prod.ProdutoQuantidade = "Quatidade Teste";
            return prod;

        }

        public bool AtualizarProduto(ProdutoModel produto, ref string mensagem)
        {
            bool resultado = true;
            // verifica se o preço é válido
            if (produto.ProdutoPreco <= 0)
            {
                mensagem = "O Preço não pode ser menor que zero.";
                resultado = false;
            }
            else if (string.IsNullOrEmpty(produto.ProdutoNome))
            {
                mensagem = "O nome do produto não pode ser vazio";
                resultado = false;
            }
            else if (string.IsNullOrEmpty(produto.ProdutoQuantidade))
            {
                mensagem = "A quantidade não pode ser vazia";
                resultado = false;
            }
            else
            {
                // TODO: chamar a camada de negócios para atualizar o produto
                mensagem = "O produto foi atualizado com sucesso";
                resultado = true;
            }
            return resultado;
        }

    }
}