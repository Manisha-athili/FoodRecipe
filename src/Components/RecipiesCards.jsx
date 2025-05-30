import { Card, Button } from "antd";
import { useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import 'animate.css'

const { Meta } = Card;

const RecipiesCards = () => {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/recipes");
      const jsondata = await res.json();
      console.log(jsondata);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cardData = [
    {
      title: "Soups",
      description: "Warm, hearty, and perfect for any season.",
      image:
        "https://media.istockphoto.com/id/1226618116/photo/on-the-table-in-the-village-hot-borscht-steam-is-coming-over-the-soup.jpg?s=612x612&w=0&k=20&c=LEsb0TrnGaPrk10S78_qMT_R37oQuYd8-OCzGo0k0qY=",
      path: "/Soups",
    },
    {
      title: "Salads",
      description: "Fresh and healthy salad options.",
      image:
        "https://media.istockphoto.com/id/919666108/photo/two-fresh-salad-bowls.jpg?s=2048x2048&w=is&k=20&c=o6hYVqvcVHmUSIDjgLjNajoBVnX6gg1h8bFDyw3z-0g=",
      path: "/Salads",
    },
    {
      title: "Italian",
      description: "Classic Italian dishes with rich flavors.",
      image:
        "https://media.istockphoto.com/id/668891798/photo/italian-restaurant-course-meal.jpg?s=612x612&w=0&k=20&c=Bgm0_f0g0fw_wDi8cZBUJj3TcwrwFOTxuFD7o7r9PaM=",
      path: "/Italian",
    },
    {
      title: "Snacks",
      description: "Quick bites to fuel your day.",
      image:
        "https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=612x612&w=0&k=20&c=tfLYLtT-f_I-tnmOdb_6WHRhIQa8jXy7SkFakC-P-LU=",
      path: "/Snacks",
    },
    {
      title: "Desserts",
      description: "Sweet treats for every craving.",
      image:
        "https://media.istockphoto.com/id/1185515984/photo/christmas-baking-table-scene-with-assorted-sweets-and-cookies-top-view-over-a-rustic-wood.jpg?s=612x612&w=0&k=20&c=cWVTyQfwrge2OfuWsRCAlDbZ9fSZO6pg_yuiGq9naLs=",
      path: "/Desserts",
    },
    {
      title: "Breakfast",
      description: "Start your day with a nutritious meal.",
      image:
        "https://cdn.pixabay.com/photo/2019/01/12/16/21/breakfast-3928800_1280.jpg",
      path: "/Breakfast",
    },
    {
      title: "Lunch",
      description: "Midday meals to keep you energized.",
      image:
        "https://media.istockphoto.com/id/647706408/photo/lunch-break-note-on-office-clock.jpg?s=612x612&w=0&k=20&c=SDHzk4Un9k-9SGnhvy0wDSUhtSn7AUJAEV-gyIIwZ8w=",
      path: "/Lunch",
    },
    {
      title: "Dinner",
      description: "Delicious and satisfying evening meals.",
      image:
        "https://media.istockphoto.com/id/1357625017/photo/shot-of-a-young-family-enjoying-a-meal-together.jpg?s=612x612&w=0&k=20&c=ytrLA78CJBLjVqtnn9P6nxFm0Rmx7K-AR7bGHQoJpvU=",
      path: "/Dinner",
    },
  ];

  return (
    <>
   <div className="d-flex justify-content-between align-items-center p-4 mt-4" style={{ backgroundColor: '#f0f2f5' }}>
  <h3 className="m-0 fw-semibold">Explore to find</h3>
    <Link to='/Addrecipe'>  <button
    className="btn"
    style={{
      background: 'linear-gradient(to right, #000000 0%, #53346D  51%, #000000  100%)',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'background 0.3s ease'
    }}
  >
    Add Recipe
  </button></Link>
</div>

    
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4 " style={{  backgroundColor: '#f0f2f5' }}>
        
      {cardData.map((card, index) => (
        <Card
          key={index}
          hoverable
          onClick={() => navigate(card.path)}
          style={{ width: 350 }}
          cover={<img alt={card.title} src={card.image} height="300px" />}
        >
          <Meta title={card.title} description={card.description} />
          <Button type="primary" className="mt-3" onClick={() => navigate(card.path)}>
            Take a look
          </Button>
        </Card>
      ))}
    </div>
    </>
  );
};

export default RecipiesCards;
