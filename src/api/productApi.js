import axios from "axios";

// Tạo instance với base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// ── GET all ──────────────────────────────────────
export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

// ── GET by ID ────────────────────────────────────
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// ── POST (tạo mới) ───────────────────────────────
export const createProduct = async (productData) => {
  const response = await api.post("/products", productData);
  return response.data;
};

// ── PUT (cập nhật) ───────────────────────────────
export const updateProduct = async (id, productData) => {
  await api.put(`/products/${id}`, { id, ...productData });
};

// ── DELETE ───────────────────────────────────────
export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};
