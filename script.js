document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    const event = {
      event: "artjoe_outbound_click",
      link_id: link.dataset.track,
      link_url: link.href,
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  });
});
