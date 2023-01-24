function getSize(w, h, d)
{
  let area = w*h*2 + d*h*2 + w*d*2
  return [area,w*h*d]
}
