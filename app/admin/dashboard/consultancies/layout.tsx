"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return { children };
}

// className="bg-white text-gray-800 rounded-lg border border-gray-200 "
