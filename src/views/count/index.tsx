// src/views/count/index.tsx
import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import counter from "@/store/Counter";
import { useNavigate } from "react-router-dom";
import api from "@/api/index";

interface Post {
  id: number;
  title: string;
  // 根据实际 API 返回的数据结构定义更多字段
}

function MyComponent() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/add-order")}>Go to Add Order Page</button>
  );
}

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const data = await api.getPosts();
    return data as Post[];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};

const Page = observer(() => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div>
      <MyComponent />
      <h3>计数器案例</h3>
      <div>点击次数：{counter.count + posts.length}</div>
      <button onClick={counter.increment}>加1</button>
      <button onClick={counter.decrement}>减1</button>
      <button onClick={counter.reset}>重置</button>
    </div>
  );
});

export default Page;