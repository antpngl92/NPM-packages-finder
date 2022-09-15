import React, { FC } from "react";
import _ from "lodash";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { TLibrary } from "pages/Library/utils";
import { formatDate } from "utils";
import { Typography, Paper, Link, Tooltip } from "components";

interface Props {
  data: TLibrary[];
}

const LibraryTable: FC<Props> = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Version</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Links</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.package.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.package.name}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ maxWidth: "200px" }}
                  >
                    <Tooltip title={row.package.description}>
                      <Typography noWrap={true}>
                        {row.package.description}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{row.package.version}</TableCell>
                  <TableCell>{formatDate(row.package.date)}</TableCell>
                  <TableCell>
                    {Object.entries(row.package.links).map(([k, v]) => (
                      <Tooltip title={v}>
                        <Link
                          sx={{ marginLeft: "10px" }}
                          href={v}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {k}
                        </Link>
                      </Tooltip>
                    ))}
                  </TableCell>
                  <TableCell>{row.score.final}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default LibraryTable;
