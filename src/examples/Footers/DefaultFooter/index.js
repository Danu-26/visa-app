import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content = {} }) {
  // Ensure content properties have default values to prevent errors
  const { brand = {}, socials = [], menus = [], copyright = "" } = content;

  return (
    <MKBox component="footer" sx={{ bgcolor: "#f8f9fa", py: 5, mt: 5 }}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {brand.route && brand.image && (
            <Grid item xs={12} md={3} sx={{ textAlign: "center", mb: 3 }}>
              <Link to={brand.route}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name || "Brand"}
                  sx={{ width: 150, height: "auto", mb: 2 }} // Increased logo size
                />
              </Link>
              <MKTypography variant="h6" fontWeight="bold">
                {brand.name || "Brand Name"}
              </MKTypography>
            </Grid>
          )}

          {menus.map(({ name: title, items = [] }) => (
            <Grid key={title} item xs={6} md={2} sx={{ textAlign: "center", mb: 3 }}>
              <MKTypography variant="button" fontWeight="bold" textTransform="capitalize" mb={1}>
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none", paddingLeft: 0 }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" sx={{ mb: 1 }}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="text.secondary"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route || "#"}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="text.secondary"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}

          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            <MKBox display="flex" justifyContent="center" gap={2}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={key}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  sx={{
                    transition: "all 0.3s",
                    "&:hover": { color: "primary.main", transform: "scale(1.2)" },
                  }}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>

          {copyright && (
            <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
              {copyright}
            </Grid>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      route: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
    }),
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node,
        link: PropTypes.string,
      })
    ),
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            route: PropTypes.string,
            href: PropTypes.string,
          })
        ),
      })
    ),
    copyright: PropTypes.string,
  }),
};

export default DefaultFooter;
