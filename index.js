async function getLatest() {
  const url = "https://routinehub.co/api/v1/shortcuts/22688/versions/latest";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json
  } catch (error) {
    console.error(error.message);
    return json
  }
}

async function shortcutredirect() {
  var latest = await getLatest()
  console.log(latest)
  window.location.href = "https://routinehub.co/download/" + latest.id
} 

shortcutredirect()


