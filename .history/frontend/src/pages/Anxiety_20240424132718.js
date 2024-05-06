import React from "react";

const Anxiety = () => {
  return (
    <div>
      <div className={`${mode === "dark" ? "bg-gray-800" : "bg-[#fbf8f4]"}`}>
        <div className="pt-6">
          <SearchInputEl />
        </div>
        <Stack
          direction={{ xs: "column", sm: "row", backgroundColor: "[#fbf8f4]" }}
          spacing={{ xs: 1, sm: 2, md: 0 }}
        >
          <Box
            className={`${mode === "light" ? "bg-[#fbf8f4]" : ""}`}
            sx={{ flex: 2, p: 2 }}
          >
            <Card
              className={`${mode === "light" ? "bg-[#fbf8f4]" : ""}`}
              sx={{ minWidth: 150, mb: 3, mt: 1, p: 2 }}
            >
              <Box sx={{ pb: 2 }}>
                <Typography
                  className={`${
                    mode === "light" ? "text-black" : "text-white"
                  }`}
                  sx={{ fontWeight: 600 }}
                  component="h4"
                >
                  Filter Blog by Category
                </Typography>
              </Box>
              <SelectComponent
                className={`${mode === "light" ? "text-black" : "text-white"}`}
                handleChangeCategory={handleChangeCategory}
                cat={cat}
              />
              {/* </Card> */}
            </Card>
          </Box>
          <Box
            className={`${mode === "light" ? "bg-[#fbf8f4]" : ""}`}
            sx={{ flex: 5, p: 2 }}
          >
            {loading ? (
              <LoadingBox />
            ) : blogs && blogs.length === 0 ? (
              <>
                <Box
                  sx={{
                    minHeight: "350px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>No result found!</h2>
                </Box>
              </>
            ) : (
              blogs &&
              blogs.map((blog, i) => (
                (log._id == ) 
                <CardElement
                  key={i}
                  id={blog._id}
                  company={blog.company}
                  image={blog.image}
                  blogTitle={blog.title}
                  description={blog.description}
                  category={
                    blog.blogType ? blog.blogType.blogTypeName : "No category"
                  }
                  creatorId={blog.user._id}
                  location={blog.location}
                />
              ))
            )}
            <Stack spacing={2}>
              <Pagination
                page={page}
                count={pages === 0 ? 1 : pages}
                onChange={(event, value) => setPage(value)}
              />
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default Anxiety;
