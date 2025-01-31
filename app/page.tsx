"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import styles from './index.module.css'
import { Download } from "lucide-react";

export default function IndexPage() {

  const reviews = [
    {
      name: "Yang Liu",
      avatar: "/avatars/user1.png",
      content: "界面设计很舒服，操作简单。最重要的是完全免费，没有广告打扰，体验特别好！",
    },
    {
      name: "Kevin Wang",
      avatar: "/avatars/user2.png",
      content: "作为一个程序员，经常需要看技术视频。这个应用让我在学技术的同时还能提高英语水平。",
    },
    {
      name: "Tony Yang",
      avatar: "/avatars/user3.png",
      content: "每天看着喜欢的YouTube视频学英语，不知不觉单词量就上去了。界面简洁，使用很方便！",
    },
    {
      name: "HaoRan Zhang",
      avatar: "/avatars/user4.png",
      content: "让我对记单词又重新提起兴趣",
    },
    {
      name: "Sophie Liu",
      avatar: "/avatars/user5.png",
      content: "终于找到一个好用的英语学习工具了！收藏单词功能特别实用，复习起来很方便。",
    },
    {
      name: "David Wu",
      avatar: "/avatars/user6.png",
      content: "用了一个月，词汇量明显提升。看美剧学英语真的是很棒的学习方式！",
    },
    {
      name: "Olivia Gao",
      avatar: "/avatars/user7.png",
      content: "一口气关注了好多英文博主",
    },
    {
      name: "Lucy Wang",
      avatar: "/avatars/user8.png",
      content: "从TED演讲到美剧，各种类型的视频都能学，让英语学习变得更有趣了。",
    },
  ];

  return (
    <section className="container min-h-screen">
      <video
        className="absolute top-16 inset-0 w-screen object-contain -z-10 brightness-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="mt-40 flex max-w-[980px] flex-col items-start gap-6 z-10 pt-6">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-shadow-lg">
          EngSub  --learn english on YouTube
        </h1>
        <p className="max-w-[700px] mt-6 text-2xl text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          免费，无广告，通过YouTube视频学习英语，轻松查阅单词翻译，记录单词，便捷复习，英语学习更加有趣。
        </p>

        <div style={{height: '100px'}}></div>
        {/* 应用商店按钮组 */}
        <div className="flex flex-wrap gap-6 mt-12">
          <Link 
            href="https://play.google.com/store/apps/details?id=com.shiming.tube_learning" 
            target="_blank"
            className="transition-all duration-300 hover:scale-105 rounded-xl border-2 border-white/30 hover:border-white/50 p-1 backdrop-blur-sm"
          >
            <img 
              src="/images/play-store-link.png" 
              alt="Get it on Google Play" 
              className="h-16 w-auto"
            />
          </Link>
          <Link 
            href="/downloads/engsub.apk" 
            className="flex items-center px-6"
          >
            <span className="text-gray-200 text-lg font-medium"> 
              <Download className="inline mr-1" />
              Download APK 
            </span>
          </Link>
        </div>
      </div>

      {/* 特性介绍部分 */}
      <div className="mt-96 z-10">
        {/* 特性1：字幕翻译 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="/images/player-screen.png" 
              alt="单词查询" 
              className="rounded-xl shadow-lg w-80"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              快速查询单词
            </h2>
            <p className="text-xl">
              观看任何你喜欢的YouTube视频，点按单词查看单词解释，一键收藏到单词列表
            </p>
          </div>
        </div>

        {/* 特性2：单词本 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="/images/review-screen.png" 
              alt="单词复习" 
              className="rounded-xl shadow-lg w-80 float-end"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              复习你的单词
            </h2>
            <p className="text-xl">
              回顾之前的生词，加深印象，提高词汇量。
            </p>
          </div>
        </div>

        {/* 用户评价滚动展示 */}
        <div className="mt-32 mb-20">

          <div className="relative w-full overflow-hidden">
            <div className={`${styles.animateScroll} flex gap-6 py-4`}>
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  avatar={review.avatar}
                  content={review.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 添加页脚 */}
      <footer className="w-full py-6 mt-20 border-t border-gray-800">
        <div className="container flex justify-center items-center">
          <Button 
            variant="link"
            onClick={handleMailClick}
          >
            Contact Us
          </Button>
        </div>
      </footer>
    </section>
  )
}

export const handleMailClick = () => {
  const email = "adc3080027554@gmail.com";
  const subject = "[Feedback for EngSub]"; 
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
};

interface ReviewCardProps {
  name: string;
  avatar: string;
  content: string;
  role?: string;
}

const ReviewCard = ({ name, avatar, content }: ReviewCardProps) => {
  return (
    <div className="flex-shrink-0 w-80 bg-slate-800/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-medium text-gray-100">{name}</h3>
          <div className="flex text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </div>
  );
};
