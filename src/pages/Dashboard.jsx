import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: "", genre: "", releaseYear: "", rating: "" });
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/movies", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      toast.error("Erro ao carregar filmes");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      toast.success("Filme cadastrado com sucesso");
      setForm({ title: "", genre: "", releaseYear: "", rating: "" });
      fetchMovies();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/movies/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Filme removido");
      fetchMovies();
    } catch (err) {
      toast.error("Erro ao remover filme");
    }
  };

  return (
    <div className="dashboard">
      <h2>Bem-vindo à sua coleção de filmes</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <input
          type="text"
          placeholder="Título"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Gênero"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Ano de Lançamento"
          value={form.releaseYear}
          onChange={(e) => setForm({ ...form, releaseYear: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Nota"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          step="0.1"
          min="0"
          max="10"
          required
        />
        <button type="submit">Adicionar Filme</button>
      </form>

      {loading ? (
        <p>Carregando filmes...</p>
      ) : (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie._id}>
              <strong>{movie.title}</strong> ({movie.releaseYear})<br />
              <em>{movie.genre}</em> - Nota: {movie.rating}
              <button onClick={() => handleDelete(movie._id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}

      <button className="logout-button" onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}>
        Sair
      </button>
    </div>
  );
}