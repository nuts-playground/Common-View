import React from "react";

export default function Loading() {
    return (
        <div className={`fixed right-0 left-0 top-0 bottom-0 flex justify-center bg-white z-10`}>
            <span className="loading loading-dots loading-lg bg-eric"></span>
        </div>
    )
}
