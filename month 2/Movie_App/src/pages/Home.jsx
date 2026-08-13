import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import HeroSection from '../components/home/HeroSection'
import CategoryTabs from '../components/home/CategoryTabs'
import StatsBar from '../components/home/StatsBar'
import { useHomePage } from '../hooks'

const Home = () => {
  const {
    displayedMovies,
    featuredMovie,
    stats,
    categories,
    favorites,
    moviesLoading,
    activeCategory,
    handleSearch,
    setActiveCategory,
    toggleFavorite,
    isFavorite,
  } = useHomePage()

  return (
    <div className='min-h-screen bg-slate-900'>
      <HeroSection
        movie={featuredMovie}
        loading={moviesLoading}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8'>
        <div className='text-center space-y-4'>
          <h2 className='text-2xl font-bold text-slate-50'>
            Discover Your Next Favorite Movie
          </h2>
          <SearchBar
            onSearch={handleSearch}
            placeholder='Search by title, director, cast...'
          />
        </div>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <MovieGrid
          movies={displayedMovies}
          loading={moviesLoading}
          onToggleFavorite={toggleFavorite}
          favoriteMovies={favorites}
        />

        {!moviesLoading && displayedMovies.length > 0 && (
          <StatsBar stats={stats} />
        )}
      </div>
    </div>
  )
}

export default Home
