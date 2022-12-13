const Ground: React.FC<{ color: string }> = ({ color }) => {
  return (
    <>
      {/* rotation=x makes it horozontal */}
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default Ground;
