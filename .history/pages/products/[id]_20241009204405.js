import dynamic from 'next/dynamic';


const ProductDetails = dynamic(() => import('../../components/ProductDetails'), { ssr: false });

export default function ProductPage({ params }) {
  
  return <ProductDetails productId={params.id} />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
