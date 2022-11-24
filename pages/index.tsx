import { Card } from '@/components/Card';

import { useProducts } from '@/hooks/useProducts';

import { CreateProductForm } from '@/features/products/CreateProductForm';

const Home = () => {
  const { data: products } = useProducts();

  return (
    <div>
      <h1 className="my-8 text-center text-4xl">My Next.js Template</h1>

      <div className="my-8">
        <CreateProductForm />
      </div>

      <div className="gap flex flex-wrap justify-center gap-4">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
