/* eslint-disable react/no-unknown-property */
import {
  ContactShadows,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";

const Laptop = () => {
  const model = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tention: 400 }}
        snap={{ mass: 4, tention: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#F89880"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={model.scene}
            position-y={-1.2}
            rotation={[0.1, 0.5, 0]}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.18}
              position={[0, 1.56, -1.4]}
              rotation={[-0.256, 0, 0]}
            >
              <iframe src="https://talha-portfolio-three.vercel.app/" />
            </Html>
          </primitive>

          <Text
            font="./ovo.woff"
            fontSize={1}
            position={[3, 0.35, -2]}
            rotation={[0, -1, 0]}
            maxWidth={2}
            textAlign="center"
            color={"red"}
          >
            TALHA'S HUB
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Laptop;
