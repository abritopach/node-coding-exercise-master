export interface KnackApplication {
    _id: string
    users: Users
    ecommerce: Ecommerce
    counts: Counts
    field_count: number
    thumb_count: number
    object_count: number
    task_count: number
    view_count: number
    scene_count: number
    credential_count: number
    status: string
    settings: Settings
    tasks: any[]
    payment_processors: any[]
    design: Design
    layout: Layout
    copying: boolean
    feature_flags: boolean[]
    name: string
    slug: string
    distributions: any[]
    versions: Version[]
    first_created: string
    account_id: string
    user_id: string
}

export interface Users {
    enabled: boolean
    scope: string
    registration: string
}

export interface Ecommerce {
    enabled: boolean
}

export interface Counts {
    total_entries: number
    asset_count: number
    asset_size: number
}

export interface Settings {
    geo: boolean
    timezone: string
    timezone_offset: string
    timezone_dst: string
    cluster: string
    powered_by_link: boolean
    new_count: boolean
    registration_migration_status: string
    https_redirect: boolean
    should_purge_record_history: boolean
    support_access: boolean
    use_multiple_api_subdomains: boolean
    scriptProtectionEnabled: boolean
    embed_login_method: string
    ignoreBilling: boolean
    v3_beta: boolean
    v3_open_beta: boolean
    mongo: string
    solr: string
}

export interface Design {
    general: General
    regions: Regions
    components: Components
}

export interface General {
    theme: string
    font: string
    links: Links
    buttons: Buttons
    tables: Tables
}

export interface Links {
    color: string
}

export interface Buttons {
    color: string
    bg_color: string
}

export interface Tables {
    style: string
    dividers: boolean
    striped: boolean
    hover: boolean
    spacing: string
}

export interface Regions {
    body: Body
    header: Header
}

export interface Body {
    full_width: boolean
}

export interface Header {
    bg_color: string
    menu: Menu
    title: Title
}

export interface Menu {
    show: boolean
    user_auth_based: boolean
    format: string
    color: string
    outline_or_fill_color: string
}

export interface Title {
    color: string
    show_logo: boolean
}

export interface Components {
    notifications: Notifications
}

export interface Notifications {
    color: string
    bg_color: string
}

export interface Layout {
    entry_scene_menu: boolean
    app_menu_auth: boolean
    theme: string
}

export interface Version {
    _id: string
    status: string
    objects: Object[]
    scenes: Scene[]
}

export interface Object {
    inflections: Inflections
    connections: Connections
    user: boolean
    status: string
    tasks: any[]
    type: string
    _id: string
    name: string
    fields: Field[]
    template?: string
    key: string
    identifier: string
    profile_key?: string
}
export interface Inflections {
    singular: string
    plural: string
}

export interface Connections {
    inbound: any[]
    outbound: any[]
}

export interface Field {
    type: string
    required: boolean
    unique: boolean
    user: boolean
    conditional: boolean
    rules: any[]
    validation: any[]
    _id: string
    key: string
    name: string
    format?: Format
    default?: boolean
    immutable?: boolean
}

export interface Format {
    blank?: string
    default: any
    sorting?: string
    type?: string
    options?: string[]
    enable_autocomplete?: boolean
    format?: string
    input?: string
    calendar?: boolean
    date_format?: string
    default_time?: string
    default_type?: string
    time_format?: string
    time_type?: string
    text_format?: string
    label?: string
    required?: boolean
    source?: string
    thumbs?: any[]
}

export interface Scene {
    groups: Group[]
    _id: string
    name: string
    slug: string
    key: string
    views: View[]
    parent?: string
    object?: string
    type?: string
    limit_profile_access?: boolean
    allowed_profiles?: any[]
}

export interface Group {
    columns: Column[]
}

export interface Column {
    keys: string[]
    width: number
}

export interface View {
    columns: Column2[]
    links: Link[]
    inputs: any[]
    _id: string
    name: string
    title: string
    type: string
    description: string
    limit_profile_access?: boolean
    allowed_profiles?: any[]
    registration_type?: string
    key: string
    groups?: Group3[]
    format?: string
    label?: string
    source?: Source
    action?: string
    rules?: Rules
    no_data_text?: string
    totals?: any[]
    preset_filters?: any[]
    rows_per_page?: string
    keyword_search?: boolean
    allow_exporting?: boolean
    allow_preset_filters?: boolean
    filter_type?: string
    menu_filters?: any[]
    filter_fields?: string
    alert?: string
    layout?: string
    label_format?: string
}

export interface Column2 {
    grouping?: boolean
    group_sort?: string
    ignore_edit?: boolean
    ignore_summary?: boolean
    conn_separator?: string
    conn_link?: string
    link_type?: string
    link_text?: string
    link_field?: string
    icon?: Icon
    img_gallery?: string
    width: any
    align?: string
    rules?: any[]
    field?: Field2
    header?: string
    type?: string
    scene?: string
    sortable?: boolean
    groups?: Group2[]
}

export interface Icon {
    icon: string
    align: string
}

export interface Field2 {
    key: string
}

export interface Group2 {
    columns: Column3[][]
}

export interface Column3 {
    key: string
    name: string
}

export interface Link {
    name: string
    type: string
    scene: string
}

export interface Group3 {
    columns: Column4[]
}

export interface Column4 {
    inputs: Input[]
}

export interface Input {
    key?: string
    type: string
    label: string
    field: Field3
    action_authenticate?: boolean
    label_authenticate?: string
    action_update?: boolean
    label_update?: string
    id?: string
}

export interface Field3 {
    key: string
}

export interface Source {
    object?: string
    criteria?: Criteria
    limit?: string
    sort?: Sort[]
    authenticated_user?: boolean
    type?: string
}

export interface Criteria {
    match: string
    rules: any[]
    groups: any[]
}

export interface Sort {
    field: string
    order: string
}

export interface Rules {
    submits: Submit[]
}

export interface Submit {
    key: string
    action: string
    message: string
    reload_show: boolean
    is_default: boolean
}
