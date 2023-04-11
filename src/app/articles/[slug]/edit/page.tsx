"use client";

import { Article } from "@/types/articles";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

async function getArticleBySlug(slug: string): Promise<Article> {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`);
  if (!res.ok) notFound();

  const data = await res.json();
  const article = data.article;

  if (article === null) notFound();
  return article as Article;
}

export default async function EditArticle({
  params,
}: {
  params: { slug: string };
}) {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const fetch = async () => {
      const article = await getArticleBySlug(params.slug);
      setArticle(article);
    };
    fetch();
  }, []);

  // TODO: react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  // export type Article = {
  //   id: number;
  //   title: string;
  //   content: string;
  //   slug: string;
  //   createdAt: Date;
  //   updatedAt: Date;
  //   author: User;
  //   comments: Comment[];
  // };

  return (
    <div className="text-xl">
      <h2 className="text-2xl mb-4">Edit Article</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            defaultValue={article?.title}
            {...register("title")}
            className="bg-slate-900 px-2"
          />
        </div>

        <textarea name="" id=""></textarea>
        <input
          defaultValue={article?.content}
          {...register("content")}
          className="bg-slate-900 px-2"
        />

        <input
          {...register("required", { required: true })}
          className="bg-slate-900 px-2"
        />
        {errors.required && <span>This field is required</span>}

        <input type="submit" className="bg-slate-900 px-2" />
      </form>
    </div>
  );
}
