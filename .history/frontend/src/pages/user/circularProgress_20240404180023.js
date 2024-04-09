import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate(percentage) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(percentage);
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={progress} />
    </Stack>
  );
}