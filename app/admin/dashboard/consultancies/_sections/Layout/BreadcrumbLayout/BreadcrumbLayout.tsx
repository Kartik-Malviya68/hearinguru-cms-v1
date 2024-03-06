'use client';
import { Breadcrumb } from 'flowbite-react'
import React from 'react'
import { HiHome } from 'react-icons/hi';
function BreadcrumbLayout() {
    
  return (
    <Breadcrumb className="bg-gray-50 px-5 border border-gray-200 rounded-lg py-3 dark:bg-gray-800">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Consultancies
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbLayout