import { RainbowLoader,OrbitLoader, WaveLoader, LiquidLoader, AuroraLoader, NeonLoader, BubblesLoader, DNAloader, GalaxyLoader, MatrixLoader, MeteorLoader, FireLoader, HeartLoader, SnowLoader, EqualizerLoader, HourglassLoader, RadarLoader, OrbitDotsLoader, TypingLoader, PacmanLoader, GameLoader, RocketLoader, CloudLoader, SunLoader, MoonLoader, FlowerLoader, WaterDropLoader, LeafLoader, ParticleLoader, PortalLoader, MorphLoader, MagicLoader} from "./index";
import { useState,useEffect } from "react";


function App() {
  // const [loading, setLoading] = useState(false);
  // const handleLoad = () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const failed = Math.random() > 0.5;

      if (failed) {
        setError("Failed to load products.");
      }

      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadData();
  }, []);



  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((previous) => {
  //       if (previous >= 100) {
  //         clearInterval(interval);
  //         return 100;
  //       }

  //       return previous + 1;
  //     });
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, []);

  // const [loading, setLoading] = useState(false);

  // const handleSubmit = async () => {
  //   setLoading(true);

  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 2000);
  //   });

  //   setLoading(false);
  // };
  return (
    <div>
      <div style={{ padding: "40px" }}>
        {/* <Spinner />

        <br />
        <button onClick={handleLoad}>Load Data</button>

        <LoadingOverlay visible={loading} text="Loading data..." blur={false}  color="#22c55e"/>
        <br />

        <DotsLoader />

        <br />
        <br />

        <PulseLoader />

        <br />
        <br />

        <Skeleton width="300px" height="20px" />

        <br />

        <Skeleton width="200px" height="20px" animation="shimmer" /> */}

        {/* <ProgressLoader value={progress} showLabel />

        <br />

        <ProgressLoader value={progress} color="#22c55e" size="small" />

        <br />

        <ProgressLoader value={progress} color="#ef4444" size="large" showLabel /> */}

        {/* <LoadingButton loading={loading} onClick={handleSubmit}>
          Submit
        </LoadingButton> */}

        {/* <br />
        <br />

        <LoadingButton>Submit</LoadingButton>

        <br />
        <br /> */}

        {/* <LoadingButton loading color="#22c55e" size="large">
          Save
        </LoadingButton> */}
      </div>

      {/* <LoadingCard loading={true} />

      <br />

      <LoadingCard loading={loading}>
        <div style={{ padding: "20px" }}>
          <h2>Product Name</h2>
          <p>This is the actual product content.</p>
          <button>Buy Now</button>
        </div>
      </LoadingCard> */}
      {/* 
      <h2>Spinner</h2>

      <Loader variant="spinner" />

      <h2>Dots</h2>

      <Loader variant="dots" />

      <h2>Pulse</h2>

      <Loader variant="pulse" />

      <h2>Large Green Spinner</h2>

      <Loader variant="spinner" size="large" color="#22c55e" /> */}

      {/* <LoadingState loading={loading} error={error}>
        <h2>Products</h2>

        <p>Product list loaded successfully.</p>
      </LoadingState> */}

      {/* <RainbowLoader size="small" />

      <br /> */}

      {/* <RainbowLoader size="medium" />

      <br />

      <RainbowLoader size="large" />

      <OrbitLoader size="small" />

      <OrbitLoader size="medium" />

      <OrbitLoader size="large" />
      <WaveLoader size="small" />

      <WaveLoader size="medium" />

      <WaveLoader size="large" /> */}
      {/* <LiquidLoader size="small" />

      <LiquidLoader size="medium" />

      <LiquidLoader size="large" /> */}

      {/* <AuroraLoader size="small" />

      <AuroraLoader size="medium" />

      <AuroraLoader size="large" /> */}
      {/* <NeonLoader size="large" />
      <BubblesLoader size="small" />

      <BubblesLoader size="medium" />

      <BubblesLoader size="large" />

      <DNAloader size="small" />

      <DNAloader size="medium" />

      <DNAloader size="large" /> */}
      {/* <GalaxyLoader size="small" />

      <GalaxyLoader size="medium" />

      <GalaxyLoader size="large" /> */}
      {/* <MatrixLoader size="small" />

      <MatrixLoader size="medium" />

      <MatrixLoader size="large" /> */}
      {/* <MeteorLoader size="small" />

      <MeteorLoader size="medium" />

      <MeteorLoader size="large" /> */}
      {/* <FireLoader size="small" />
      <FireLoader size="medium" />
      <FireLoader size="large" /> */}
      {/* <HeartLoader size="small" />
      <HeartLoader size="medium" />
      <HeartLoader size="large" /> */}
      {/* <SnowLoader size="small" />

      <SnowLoader size="medium" />

      <SnowLoader size="large" /> */}
      {/* <EqualizerLoader size="small" />

      <EqualizerLoader size="medium" />

      <EqualizerLoader size="large" /> */}
      {/* <HourglassLoader size="small" />

      <HourglassLoader size="medium" />

      <HourglassLoader size="large" /> */}
      {/* <RadarLoader size="small" />

      <RadarLoader size="medium" />

      <RadarLoader size="large" /> */}
      {/* <OrbitDotsLoader size="small" />

      <OrbitDotsLoader size="medium" />

      <OrbitDotsLoader size="large" /> */}
      {/* <TypingLoader text="Loading" size="small" />

      <TypingLoader text="Processing" size="medium" />

      <TypingLoader text="Please wait" size="large" /> */}
      {/* <PacmanLoader size="small" />

      <PacmanLoader size="medium" />

      <PacmanLoader size="large" /> */}
      {/* <GameLoader size="small" />

      <GameLoader size="medium" />

      <GameLoader size="large" /> */}
      {/* <RocketLoader size="small" />

      <RocketLoader size="medium" />

      <RocketLoader size="large" /> */}
      {/* <CloudLoader size="small" />

      <CloudLoader size="medium" />

      <CloudLoader size="large" /> */}
      {/* <SunLoader size="small" />

      <SunLoader size="medium" />

      <SunLoader size="large" />

      <MoonLoader size="small" />

      <MoonLoader size="medium" />

      <MoonLoader size="large" /> */}

      {/* <FlowerLoader size="small" />

      <FlowerLoader size="medium" />

      <FlowerLoader size="large" />

      <WaterDropLoader size="small" />

      <WaterDropLoader size="medium" />

      <WaterDropLoader size="large" /> */}

      {/* <LeafLoader size="small" />

      <LeafLoader size="medium" />

      <LeafLoader size="large" />

      <ParticleLoader size="small" />

      <ParticleLoader size="medium" />

      <ParticleLoader size="large" /> */}
      <PortalLoader size="small" />

      <PortalLoader size="medium" />

      <PortalLoader size="large" />

      <MorphLoader size="small" />

      <MorphLoader size="medium" />

      <MorphLoader size="large" />
      <MagicLoader size="small" />

      <MagicLoader size="medium" />

      <MagicLoader size="large" />
    </div>
  );
}

export default App;
