import { useInventory } from '../store/InventoryContext';

export default function Favorites() {
  const { favorites, toggleFavorite } = useInventory();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Улюблені товари</h1>
      {favorites.length === 0 ? (
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', textAlign: 'center' }}>
          Тут поки що нічого немає. Додайте товари в улюблені!
        </p>
      ) : (
        <>
          <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>Кількість: {favorites.length}</p>
          <div className="gallery-grid">
            {favorites.map(item => (
              <div key={item.id} className="card">
                <img src={item.photo} alt={item.inventory_name} />
                <h3>{item.inventory_name}</h3>
                <p>{item.description}</p>
                <button 
                  onClick={() => toggleFavorite(item)}
                  className="btn btn-danger"
                >
                  Видалити з улюблених
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
