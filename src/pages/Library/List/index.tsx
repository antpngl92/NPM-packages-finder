import React, { FC, useState } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import {
  TextField,
  CircularProgress,
  Paper,
  Typography,
  Grid,
  Stack,
  Button,
  Box,
} from "components";
import LibraryTable from "pages/Library/List/components/LibraryTable";

const LibraryList: FC = () => {
  const [term, setTerm] = useState("");
  const { searchLibraries } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.libraries);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchLibraries(term);
  };

  const reset = (event: any) => {
    event.preventDefault();
    setTerm("");
    searchLibraries("");
  };

  return (
    <>
      <Paper
        sx={{
          borderRadius: "2px",
          boxShadow: (theme: any) => theme.shadows[5],
          padding: (theme: any) => theme.spacing(2, 4, 3),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            component="img"
            src={"img/logo.png"}
            sx={{ heigh: "100px", width: "100px" }}
          ></Box>
          <Typography variant="h4">Package Search</Typography>
        </Stack>

        <form onSubmit={onSubmit}>
          <Grid container mb={4} sx={{ gap: "20px" }}>
            <TextField
              id="outlined-basic"
              value={term}
              label="Library"
              onChange={(e) => setTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              size="medium"
              variant="contained"
              color="success"
            >
              Search
            </Button>
            <Button
              type="submit"
              size="medium"
              variant="contained"
              color="secondary"
              onClick={(event) => reset(event)}
            >
              Clear
            </Button>
          </Grid>
        </form>
      </Paper>
      <Stack sx={{ alignItems: "center" }}>
        {error && <h3>{error}</h3>}
        {loading && <CircularProgress />}
      </Stack>
      {!error && !loading && <LibraryTable data={data} />}
    </>
  );
};

export default LibraryList;
