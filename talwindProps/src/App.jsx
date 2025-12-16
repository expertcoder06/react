import Card from './components/RecipeCard.jsx'

export default function App() {
  return (
    <>
    <Card/>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <RecipeCard
        title="Paella"
        subheader="September 14, 2016"
        image="https://source.unsplash.com/400x300/?paella"
        description="A perfect party dish made with rice and seafood."
        method="Cook rice with saffron broth and seafood until tender."
      />

      <RecipeCard
        title="Pizza"
        subheader="October 5, 2018"
        image="https://source.unsplash.com/400x300/?pizza"
        description="Classic Italian pizza with cheese and toppings."
        method="Bake dough with sauce and cheese at high temperature."
      />

      <RecipeCard
        title="Burger"
        subheader="January 10, 2020"
        image="https://source.unsplash.com/400x300/?burger"
        description="Juicy burger with fresh veggies and sauce."
        method="Grill patty, assemble bun with toppings, and serve."
      />
    </div>
    </>
  );
}