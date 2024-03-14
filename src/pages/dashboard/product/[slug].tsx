import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProductDetail from "@/components/product/detail";

const Product = () => {
  const router = useRouter();
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug(`${router.query.slug}`);
  }, [router]);

  return <ProductDetail slug={`${slug}`} />;
};

export default Product;
