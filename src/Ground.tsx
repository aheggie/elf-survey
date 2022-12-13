const Ground: React.FC<{ groundColor: string }> = ({ groundColor }) => {
  return (
    <>
      {/* rotation=x makes it horozontal */}
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={groundColor} />
      </mesh>
    </>
  );
};

export default Ground;
