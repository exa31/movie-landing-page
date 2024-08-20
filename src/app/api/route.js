import { NextResponse } from "next/server";

export async function GET(url) {
    const res = await fetch(process.env.BASE_MOVIE_URL + "popular?language=en-US&page=2", {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
        }
    });
    const data = await res.json();
    return NextResponse.json(data);
}