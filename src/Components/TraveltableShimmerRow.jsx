// components/ShimmerRow.jsx
import React from 'react';

const TraveltableShimmerRow = () => {
  return (
    <tr className="animate-pulse border-b">
      {Array(9).fill(0).map((_, idx) => (
        <td key={idx} className="px-4 py-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </td>
      ))}
    </tr>
  );
};

export default TraveltableShimmerRow;
