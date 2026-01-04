import { useEffect, useState } from "react";
import ProdutoCard from "../components/produtoCard";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
  });

  // 5. Simulação de API
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Notebook",
          preco: 3500,
          descricao: "Notebook para estudos e trabalho",
        },
        {
          id: 2,
          nome: "Mouse",
          preco: 150,
          descricao: "Mouse sem fio",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  // 4. Formulário controlado
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome || !form.preco || !form.descricao) return;

    setProdutos([
      ...produtos,
      {
        id: Date.now(),
        nome: form.nome,
        preco: form.preco,
        descricao: form.descricao,
      },
    ]);

    setForm({ nome: "", preco: "", descricao: "" });
  };

  return (
    <main>
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
        />

        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar Produto</button>
      </form>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="lista-produtos">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;
