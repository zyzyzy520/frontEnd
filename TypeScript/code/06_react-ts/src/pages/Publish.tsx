import React from 'react'
import { useParams } from 'react-router-dom'
export default function Publish() {
    const params = useParams<{ id?: string, name: string }>();
    if (params.id) {
        console.log(params.id);
    }
    console.log(params.name);
  return (
    <div>Publish</div>
  )
}
