import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <div>
        <Cover
          CoverCaption={'DESSERTS'}
          CoverTitle={
            'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        />
      </div>
    </>
  );
};

export default Menu;
