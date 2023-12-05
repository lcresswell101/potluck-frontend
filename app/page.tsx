'use client'

import {useEffect, useState} from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/test`)

        const json: {message: string} = await response.json()

        if (json.message) {
          setResponse(json.message)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [response]);

  return (
    <>
      { response }
    </>
  )
}
