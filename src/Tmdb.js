const API_KEY = 'edbed937d0798bb1cd2932d3849b9496';
const API_BASE = 'https://api.themoviedb.org/3/'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
     {
        slug: "originals",
        title: "Originais do Netflix",
        itemsfilmes: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "treading",
        title: "Recomendados para Você",
        itemsfilmes: await basicFetch(`/treding/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        itemsfilmes: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        itemsfilmes: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        itemsfilmes: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "horror",
        title: "terror",
        itemsfilmes: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "romance",
        title: "Romance",
        itemsfilmes: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "Documentary",
        title: "Documentários",
        itemsfilmes: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  }
}
