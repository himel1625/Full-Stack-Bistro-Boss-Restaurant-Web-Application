import { useEffect, useState } from 'react';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('../menu.json')
      .then(res => res.json())
      .then(data => {
        const PopularItem = [...data].filter(
          item => item.category === 'popular',
        );
        setMenu(PopularItem);
      });
  }, []);
  console.log(menu);

  return <div>this is category</div>;
};

export default PopularMenu;
